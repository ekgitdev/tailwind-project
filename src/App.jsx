import './App.css'

const App = () => {

  return <div>
    <section className='m-12  flex h-screen bg-blue-100 items-center justify-center p-12 md:p-14 lg:p-16 xl:p-20'>
      <p>Tailwind CSS er et utility-first CSS-rammeverk som gjør det raskt og enkelt å bygge moderne,
         responsive brukergrensesnitt. I stedet for å skrive tradisjonell CSS,
          gir Tailwind deg en omfattende samling av små, gjenbrukbare klasser som 
          direkte kan brukes i HTML for å style elementer. Dette lar utviklere fokusere på
          funksjonalitet og design uten å bekymre seg for å skrive spesifikke CSS-regler. 
          Tailwind CSS er spesielt populært for sin fleksibilitet og muligheten til å skape komplekse 
          layout og design direkte i markup, samtidig som det sikrer konsistens og reduserer behovet for å 
          lage og vedlikeholde omfattende CSS-filer. Rammeverket er også enkelt å tilpasse,
          slik at du kan definere egne farger, avstand, og andre stilregler for å
          møte prosjektspesifikke behov.
      </p>
      <div className="card">Custom component</div>
    </section>
    
  </div>
  
}
 
  export default App;
 