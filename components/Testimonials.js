import Image from 'next/image'

const Testimonials = ({ description, clientCompany, clientName, imgSrc }) => (
  <>
    <div className="mt-6 md:mt-0">
      <div className=" break-inside flex rounded-2xl border-2 border-solid bg-gray-100 p-6 transition-colors duration-300 hover:border-primary-500 dark:bg-gray-700">
        <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden rounded-full md:mr-6 md:h-20 md:w-20">
          <Image
            src={imgSrc}
            alt={`avatar de ${clientName}`}
            width="120px"
            height="120px"
            className="w-full "
          />
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-100">{description}</p>
          <div className="mt-6 font-bold uppercase text-primary-500">- {clientName}</div>
          <div className="text-gray-600 dark:text-gray-200">{clientCompany}</div>
        </div>
      </div>
    </div>
  </>
)

export default Testimonials
