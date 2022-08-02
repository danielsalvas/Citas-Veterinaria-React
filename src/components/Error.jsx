

const Error = ({mensaje}) => {
  return (
    <div className='mb-5 py-3 text-center rounded-md bg-red-500 text-white uppercase font-bold'>
            <p>{mensaje}</p>
    </div>
  )
}

export default Error;
