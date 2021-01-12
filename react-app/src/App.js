
import Customer from './Component/Customer';

const customer = [
  {
  'id':1,
  'name':'조준영',
  'image':'https://placeimg.com/64/64/any/1',
  'birthday':'970804',
  'gender':'남자',
  'job':'프리랜서',
  },
  {
    'id':2,
    'name':'장원녕',
    'image':'https://placeimg.com/64/64/any/2',
    'birthday':'980904',
    'gender':'남자',
    'job':'대학생',
  }
];
function App() {
 return(
   <div>
  {customer.map(c=>{
   return <Customer key={c.id} id={c.id} name={c.name} image={c.image} 
    birthday={c.birthday} gender={c.gender} job={c.job} />
  })}
 </div>
 )
}

export default App;
