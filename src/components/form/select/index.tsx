import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'


const itemsDefault = [
  { id: 1, name: 'Defina o período do seu contrato' },
  { id: 2, name: '1 ano - Percentual de 50% sobre a receita' },
  { id: 3, name: '3 anos - Percentual de 60% sobre a receita' },
  { id: 4, name: '5 anos - Percentual de 70% sobre a receita' },
]

const Select = ({ items = itemsDefault, title, data, errors }: { errors?: any, items?: { id: number, name: string, message?: string }[], title: string, data?: { selected: string, setSelected: any } | any }) => {

  const { selected, setSelected } = data;

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }


  return <>
    {JSON.stringify(errors)}
    <Listbox name='gender' onChange={setSelected} value={selected}>
      {({ open }) => (
        <>
          {title && <Listbox.Label className="font-bold text-base leading-[150%] text-white pb-4">{title}</Listbox.Label>}
          <div className="relative mt-2">
            <Listbox.Button className={`relative w-full cursor-default bg-[#0e102d] rounded-2xl py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm  ring-inset  focus:outline-none sm:text-sm sm:leading-6 h-12 rounded-2xl border-2 border-solid border-[#131740] ${selected?.name === items[0]?.name || data?.errors && !selected ? 'shadow-none border-2 border-solid border-[#CF2D2D]' : ''}`}>
              <span className={`block truncate pl-1 not-italic font-semibold text-xs leading-[150%] text-[#A3A3A3] border-[red]`}>{!selected ? items[0].name : selected?.name}</span>
              <span

                className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-[#131740] rounded-2xl  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {items && items.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 mx-4  text-white not-italic font-semibold text-xs leading-[150%] text-[#EEEEEE] bg-[#164092] rounded-[7px]' : 'not-italic mx-4  font-semibold text-xs leading-[150%] text-[#EEEEEE]',
                        'relative cursor-default select-none py-2 pl-3 pr-9 bg-[#131740]'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold test' : 'font-normal', 'block truncate')}>
                          {person.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox >

  </>
};

export default Select;
