import { useState } from 'react'

import { labels } from 'common/utils/labels'
import { Header } from 'common/components/header'
import { medicines } from 'common/utils/constants'
import { ListItem } from 'common/components/listItem'
import { Tabs } from 'common/components/tabs'

import './medicines.scss'

const Medicines = () => {
  const [medicineList, setMedicineList] = useState(medicines)

  const deleteMedicine = (index: number) => {
    setMedicineList(medicineList.filter((_, i) => i !== index))
  }

  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="w-full h-full max-w-5xl m-auto flex justify-center items-center page-height-container">
        <ul className="divide-y divide-gray-400">
          {medicineList.map((medicine, index) => (
            <ListItem
              key={medicine.title}
              title={medicine.title}
              subtitle={medicine.subtitle}
              description={medicine.description}
              onDelete={() => deleteMedicine(index)}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Medicines
