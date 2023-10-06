
import './App.css'
import ReusableForm from './Components/ReusableForm/ReusableForm'
//import SimpleForm from './Components/SimpleForm/SimpleForm'
//import StatefulForm from './Components/StatefulForm/StatefulForm'

function App() {

  const handleSignUpSubmit = data => {
    console.log('Sing Up Data', data);
  }

  const handleUpdateProfile = e => {
    console.log('Update Profile Data', data);
  }


  return (
    <>

      <h1>Form</h1>

      { /*<SimpleForm></SimpleForm>*/}
      {/*<StatefulForm></StatefulForm>*/}
      <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h3>Sign Up</h3>
          <p>Please sign up</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText='Update'>
        <div>
          <h3>Profile Update</h3>
          <p>Please updated your profile</p>
        </div>
      </ReusableForm>



    </>
  )
}

export default App
