import ProductCard from "./ProductCard";

export default function ProductBank() {
  return (
    <main className="space-y-6">
      <ProductCard
        productId={1}
        logoSrc="/bank/mandiri.png"
        title="Mandiri"
        subtitle="Bunga Special Tengah Imlek 2023"
        fixRate="3.88"
        maxTenor="12"
        loanToValue="1%"
        komisi={1}
        rating={3}
        reviews={14}
        users={220}
        jaminan="Ruko, Rukan, Rumah, Apartemen"
        target="Karyawan, Pengusaha"
      />
      <ProductCard
        productId={2}
        logoSrc="/bank/paninbank.png"
        title="Panin"
        subtitle="Panin KPR & KPR XTRA"
        fixRate="9.9"
        maxTenor="10"
        loanToValue="85%"
        komisi={1}
        rating={2}
        reviews={9}
        users={220}
        jaminan="Ruko, Rukan, Rumah, Apartemen"
        target="Karyawan"
      />
      <ProductCard productId={3} logoSrc="/bank/mnc.png" title="MNC" subtitle="MNC KPR Secondary" fixRate="12.00" maxTenor="1" loanToValue="50-60%" komisi={1} rating={4} reviews={10} users={220} jaminan="Rumah, Apartemen" target="Karyawan" />
      <ProductCard
        productId={4}
        logoSrc="/bank/common.png"
        title="Commonwealth"
        subtitle=" KPR Primary"
        fixRate="-"
        maxTenor="-"
        loanToValue="-"
        komisi={1}
        rating={3}
        reviews={14}
        users={220}
        jaminan="Ruko, Rukan, Rumah, Apartemen"
        target="Karyawan, Pengusaha"
      />
      <ProductCard
        productId={5}
        logoSrc="/bank/common.png"
        title="Commonwealth"
        subtitle=" KPR Primary Secondary"
        fixRate="2"
        maxTenor="-"
        loanToValue="-"
        komisi={2.4}
        rating={3}
        reviews={14}
        users={220}
        jaminan="Ruko, Rukan, Rumah, Apartemen"
        target="Karyawan, Pengusaha "
      />
      <ProductCard
        productId={6}
        logoSrc="/bank/uob.png"
        title="UOB"
        subtitle=" KPR Primary"
        fixRate="3.99%"
        maxTenor="-"
        loanToValue="-"
        komisi={1}
        rating={0}
        reviews={0}
        users={220}
        jaminan="Ruko, Rukan, Rumah, Apartemen"
        target="Karyawan, Pengusaha & Profesional"
      />
      <ProductCard
        productId={7}
        logoSrc="/bank/uob.png"
        title="UOB"
        subtitle=" KPR Secondary"
        fixRate="1"
        maxTenor="1"
        loanToValue="-"
        komisi={1}
        rating={0}
        reviews={0}
        users={220}
        jaminan="Rumah, Apartemen"
        target="Karyawan & Profesional, Pengusaha"
      />
      <ProductCard
        productId={8}
        logoSrc="/bank/ocbc.png"
        title="OCBC"
        subtitle=" KPR Kendali"
        fixRate="6.75"
        maxTenor="10"
        loanToValue="-"
        komisi={1}
        rating={0}
        reviews={0}
        users={220}
        jaminan="Rumah, Apartemen"
        target="Karyawan & Profesional, Pengusaha"
      />
      <ProductCard
        productId={9}
        logoSrc="/bank/cimb.png"
        title="CIMB Niaga"
        subtitle=" KPR Primary"
        fixRate="6.75"
        maxTenor="10"
        loanToValue="-"
        komisi={1}
        rating={0}
        reviews={0}
        users={220}
        jaminan="Rumah, Apartemen"
        target="Karyawan & Profesional, Pengusaha"
      />
      <ProductCard
        productId={10}
        logoSrc="/bank/cimb.png"
        title="CIMB Niaga"
        subtitle=" KPR Secondary"
        fixRate="-"
        maxTenor="-"
        loanToValue="80%"
        komisi={1}
        rating={0}
        reviews={0}
        users={220}
        jaminan="Rumah, Apartemen"
        target="Karyawan & Profesional, Pengusaha"
      />
      <ProductCard
        productId={11}
        logoSrc="/bank/cimb.png"
        title="CIMB Niaga"
        subtitle=" KPR Extra"
        fixRate="-"
        maxTenor="-"
        loanToValue="80%"
        komisi={1}
        rating={0}
        reviews={0}
        users={220}
        jaminan="Rumah, Apartemen"
        target="Karyawan & Profesional, Pengusaha"
      />
    </main>
  );
}
