import { useState, forwardRef } from 'react'

import {
  Tab,
  Tabs,
  TabsList,
  TabPanel,
  Modal
} from '@mui/base'
import classnames from 'classnames'
import { labels } from 'common/utils/labels'
import { Header } from 'common/components/header'
import { ListItem } from 'common/components/listItem'
import { medicines, vaccines } from 'common/utils/constants'
import QRCode from 'common/images/qr-google-com.svg'

import './medicines.scss'

const Medicines = () => {
  const [medicineList, setMedicineList] = useState(medicines)
  const [openMedicineModal, setOpenMedicineModal] = useState(false)
  const [openVaccineModal, setOpenVaccineModal] = useState(false)
  const [selectedVaccine, setSelectedVaccine] = useState<Record<string, string>>({})

  const deleteMedicine = (index: number) => {
    setMedicineList(medicineList.filter((_, i) => i !== index))
  }
  
  const handleAddMedicine = event => {
    event.preventDefault()

    const medicineName = event.target.medicineName.value
    const medicineFrequency = event.target.medicineFrequency.value
    const medicineDuration = event.target.medicineDuration.value

    setMedicineList(prevMedicineList => {
      return [...prevMedicineList, {
        title: medicineName,
        subtitle: medicineFrequency,
        description: medicineDuration
      }]
    })

    setOpenMedicineModal(false)
    event.target.reset()
  }

  const Backdrop = forwardRef<
    HTMLDivElement,
    { open?: boolean, className: string }
  >((props, ref) => {
    const { open, className, ...other } = props
    return (
      <div
        className={classnames({ 'MuiBackdrop-open': open }, className)}
        ref={ref}
        {...other}/>
    )
  })

  return (
    <div className="w-screen min-h-screen">
      <Header />
      <div className={`w-full h-full max-w-5xl m-auto flex
        justify-center items-center overflow-y-auto page-height-container`}>
        <Tabs aria-label='Tab Section' defaultValue={0}>
          <TabsList className="w-full max-w-5xl">
            <Tab
              aria-controls='medicine-panel'
              className="w-2/4 border-b-2 py-2 my-2 border-black border-solid hover:bg-gray-300">
              {labels.medicines}
            </Tab>
            <Tab
              aria-controls='vaccine-panel'
              className="w-2/4 border-b-2 py-2 my-2 border-black border-solid hover:bg-gray-300">
              {labels.vaccines}
            </Tab>
          </TabsList>
          <TabPanel
            id='medicine-panel'>
            <ul className={`divide-y divide-gray-400 w-full
            overflow-y-auto mr-3 list-container scrollbar mt-3`}>
              {medicineList.map((medicine, index) => (
                <ListItem
                  key={medicine.title}
                  title={medicine.title}
                  subtitle={medicine.subtitle}
                  description={medicine.description}
                  onDelete={() => deleteMedicine(index)}/>
              ))}
            </ul>
            <button
              className="bg-blue-900 hover:bg-blue-950 text-white p-2 rounded w-full mt-6"
              onClick={() => setOpenMedicineModal(true)}>
              {labels.add_medicine}
            </button>
          </TabPanel>
          <TabPanel
            id='vaccine-panel'>
            <ul className={`divide-y divide-gray-400 w-full
            overflow-y-auto mr-3 list-container scrollbar mt-3`}>
              {vaccines.map(vaccine => (
                <ListItem
                  key={vaccine.title}
                  title={vaccine.title}
                  subtitle={vaccine.subtitle}
                  description={vaccine.description}
                  onClick={() => {
                    setSelectedVaccine(vaccine)
                    setOpenVaccineModal(true)
                  }}/>
              ))}
            </ul>
          </TabPanel>
        </Tabs>
      </div>
      <Modal
        open={openMedicineModal}
        onClose={() => setOpenMedicineModal(false)}
        slots={{ backdrop: Backdrop }}
        className='modal-container'>
        <form className="w-full max-w-lg bg-gray-100 p-9" onSubmit={handleAddMedicine}>
          <div className="text-2xl mb-12" role="contentinfo">
            {labels.add_medicine}
          </div>
          <main>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-900 md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="medicineName">
                  {labels.medicine_name}
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className={`bg-gray-200 appearance-none border-2 border-gray-200
                    py-2 px-4 text-gray-700 leading-tight focus:outline-none rounded-lg w-full
                    focus:bg-white focus:border-gray-700`}
                  id="medicineName"
                  type="text"/>
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-900 md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="medicineFrequency">
                  {labels.medicine_frequency}
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className={`bg-gray-200 appearance-none border-2 border-gray-200
                    py-2 px-4 text-gray-700 leading-tight focus:outline-none rounded-lg w-full
                    focus:bg-white focus:border-gray-700`}
                  placeholder={labels.medicine_frequency_placeholder}
                  id="medicineFrequency"
                  type="text"/>
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-900 md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="medicineDuration">
                  {labels.medicine_duration}
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className={`bg-gray-200 appearance-none border-2 border-gray-200
                    py-2 px-4 text-gray-700 leading-tight focus:outline-none rounded-lg w-full
                    focus:bg-white focus:border-gray-700`}
                  placeholder={labels.medicine_duration_placeholder}
                  id="medicineDuration"
                  type="text"/>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3" />
              <div className="md:w-2/3">
                <button className={`shadow bg-blue-900 hover:bg-blue-950 focus:shadow-outline
                  focus:outline-none text-white py-2 px-4 rounded`}
                type="submit">
                  {labels.add}
                </button>
              </div>
            </div>
          </main>
        </form>
      </Modal>
      <Modal
        open={openVaccineModal}
        onClose={() => setOpenVaccineModal(false)}
        slots={{ backdrop: Backdrop }}
        className='modal-container'>
        <div className="w-full max-w-lg bg-gray-100 p-9 flex flex-col items-center" role="contentinfo">
          <h1 className="font-semibold mb-8 text-xl">
            {selectedVaccine.title}
          </h1>
          <img src={QRCode} alt='Vaccine QR Code' />
          <p className="text-center my-8">
            {`${selectedVaccine.description} • ${selectedVaccine.subtitle}`}
          </p>
          <button className={`shadow bg-blue-900 hover:bg-blue-950 focus:shadow-outline
            focus:outline-none text-white py-2 px-4 rounded`}
          type="button"
          onClick={() => setOpenVaccineModal(false)}>
            {labels.close}
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default Medicines
