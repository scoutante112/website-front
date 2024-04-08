import { useDark } from '../../../App';

export default function Field({ name, id, type, onChange, defaultValue, className, placeholder, required, disabled }: {
    name: string,
    id: string,
    type: string,
    onChange: any;
    defaultValue?: string,
    className?: string,
    placeholder?: string,
    required?: boolean,
    disabled?: boolean
}) {
    const { dark } = useDark();
    const handleChange = (event: any) => {
        onChange(event);
    };
    return (
        <div className={className}>

            {!required ?
                <div className='flex justify-between'>
                    <label htmlFor='street-address'
                           className={`${dark ? 'text-slate-200' : 'text-gray-900'} block text-sm font-medium leading-6 `}>
                        {name}
                    </label>
                    <span className='text-sm leading-6 text-gray-500' id='society-optional'>
          Optional
                    </span>
                </div>
                :
                <label htmlFor='email'
                       className={`${dark ? 'text-slate-300' : 'text-gray-900'} block text-sm leading-6 font-medium`}>
                    {name}
                </label>
            }
            <div className='mt-2'>
                <input
                    id={id}
                    disabled={disabled}
                    name={id}
                    type={type}
                    defaultValue={defaultValue}
                    onChange={handleChange}
                    autoComplete={type}
                    placeholder={placeholder}
                    required={required}
                    className={`${dark ? 'bg-bg450-inputdark text-gray-300 ring-gray-500 placeholder:text-gray-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400'}  w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-bg450-logo sm:text-sm sm:leading-6`}
                />
            </div>
        </div>
    );
}