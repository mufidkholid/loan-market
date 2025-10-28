import DataAlamat from "./DataAlamat"
import DataDomisiliForm from "./DataDomisiliForm"
import DataKTPForm from "./DataKTPForm"

const AddressForm = () => {
  return (
    <div className="card space-y-6">
      <DataKTPForm />
      <DataDomisiliForm />
      <DataAlamat />
    </div>
  )
}

export default AddressForm