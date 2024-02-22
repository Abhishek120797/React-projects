
import './App.css'
import Card from './components/Card'



function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Learning Props</h1>
      
      <div className='flex justify-evenly'>

        <Card  userName="Anchal Jaiswal" btnText="click me" imageUrl="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"/>

        <Card  userName="Abhishek Jaiswal" btnText="Visit Me" imageUrl="https://avatars.githubusercontent.com/u/110468063?s=400&u=cf6ead1d1da9c325915d8bcd6f906ebd369d2ebb&v=4"/>

      </div>
    </>
  )
}

export default App
