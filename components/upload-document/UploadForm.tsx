import DataJaminanForm from './DataJaminanForm'
import DataKeuanganForm from './DataKeuanganForm'
import DataPribadiForm from './DataPribadiForm'
import DataTambahanForm from './DataTambahan'

const UploadForm = () => {
  return (
    <div className='card space-y-6'>
      <DataPribadiForm />
      <DataJaminanForm />
      <DataKeuanganForm />
      <DataTambahanForm />
    </div>
  )
}

export default UploadForm