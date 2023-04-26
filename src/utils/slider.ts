export default class Slide {
    slide: any;
    wrapper: any;
    dist: {
        finalPosition: number;
        startX: number;
        movement: number;
        movePosition: number;
    };
    index: {
        prev: any;
        active: any;
        next: any;
    };
    slideArray: any = [];

    constructor(slide: any, wrapper: any) {
        this.slide = slide;
        this.wrapper = wrapper;
        this.dist = {
            finalPosition: 0,
            startX: 0,
            movement: 0,
            movePosition: 0,
        };

        this.index = {
            prev: undefined,
            active: 0,
            next: undefined,
        };
    }

    transistion(active: boolean) {
        this.slide &&
            (this.slide.style.transistion = active ? "transform .3s" : "");
    }

    moveSlide(distX: number) {
        this.dist.movePosition = distX;
        this.slide.style = `transform: translate3d(${distX.toString()}px, 0px, 0);`;
    }

    updatePosition(clientX: any) {
        this.dist.movement = (this.dist.startX - clientX) * 1.6;
        return Number(this.dist.finalPosition) - Number(this.dist.movement);
    }

    onStart(event: any) {
        if (event.type === "mousedown") {
            event.preventDefault();
            this.dist.startX = event.clientX;
        } else {
            this.dist.startX = event.changedTouches[0].clientX;
        }

        this.wrapper.addEventListener("mousemove", this.onMove);
        this.transistion(false);
    }

    onMove(event: any) {
        const pointerPosition =
            event.type === "mousemove"
                ? event.clientX
                : event.changedTouches[0].clientX;
        const finalPosition = this.updatePosition(pointerPosition);
        this.moveSlide(finalPosition);
    }

    onEnd(event: any) {
        const movetype = event.type === "mouseup" ? "mousemove" : "touchmove";
        this.wrapper.removeEventListener(movetype, this.onMove);
        this.dist.finalPosition = this.dist.movePosition;
        this.changeSlideToEnd();
        this.transistion(true);

        for (const key in document.querySelectorAll("#sliderControls button")) {
            if (
                Object.prototype.hasOwnProperty.call(
                    document.querySelectorAll("#sliderControls button"),
                    key
                )
            ) {
                const element = document.querySelectorAll("#sliderControls button")[
                    key
                ];

                if (Number(this.index.active) === Number(key)) {
                    element.setAttribute("class", "active");
                } else {
                    element.setAttribute("class", "");
                }
            }
        }
    }

    addSlideEvents() {
        this.wrapper?.addEventListener("mousedown", this.onStart);
        this.wrapper?.addEventListener("mouseup", this.onEnd);

        this.wrapper?.addEventListener("touchstart", this.onStart);
        this.wrapper?.addEventListener("touchend", this.onEnd);
    }

    addSlideBullets() {
        this.wrapper?.addEventListener("click", (event: any) =>
            this.moveBullets(event, this)
        );
    }

    bindEvents() {
        this.onStart = this.onStart.bind(this);
        this.onMove = this.onMove.bind(this);
        this.onEnd = this.onEnd.bind(this);
    }

    slidePosition(slide: any) {
        return Number(slide.offsetLeft) !== 0 ? -Number(slide.offsetLeft) : 0;
    }

    slidesConfig() {
        this.slideArray =
            this.slide &&
            [...this.slide.children].map((element) => {
                const position = this.slidePosition(element);
                return { element, position: position };
            });
    }

    slidesIndexNav(index: number) {
        const last = this.slideArray.length - 1;
        this.index = {
            prev: index ? index - 1 : undefined,
            active: index,
            next: index === last ? undefined : index + 1,
        };
    }

    changeSlideToEnd() {
        if (this.dist.movement > 120 && this.index.next !== undefined) {
            this.activeNextSlide();
        } else if (this.dist.movement < -120 && this.index.prev !== undefined) {
            this.activePrevSlide();
        } else {
            if (this.index.active === undefined) {
                this.index.active = 0;
            }
            this.slideChange(this.index.active);
        }
    }

    slideChange(index: number) {
        const activeSlider = this.slideArray[index];
        this.moveSlide(Number(activeSlider.position));
        this.slidesIndexNav(index);
        this.dist.finalPosition = activeSlider.position;
        this.wrapper
            ?.querySelector(`#sliderControls button:nth-child(${index + 1})`)
            ?.classList.add("active");
    }

    moveBullets(event: any, intance: any) {
        if (event.path[1].getAttribute("id") === "sliderControls") {
            for (const key in event.path[1].querySelectorAll("button")) {
                if (
                    Object.prototype.hasOwnProperty.call(
                        event.path[1].querySelectorAll("button"),
                        key
                    )
                ) {
                    const element = event.path[1].querySelectorAll("button")[key];

                    element.setAttribute("class", "");
                }
            }

            let button: number = Number(event.path[0].getAttribute("id"));
            event.path[0].classList.add("active");
            intance.slideChange(button);
        }
    }

    activePrevSlide() {
        if (this.index.prev !== undefined) return this.slideChange(this.index.prev);
    }

    activeNextSlide() {
        if (this.index.next !== undefined) return this.slideChange(this.index.next);
    }

    init() {
        this.bindEvents();
        this.addSlideEvents();
        this.transistion(true);
        this.slidesConfig();
        this.addSlideBullets();
        return this;
    }
}