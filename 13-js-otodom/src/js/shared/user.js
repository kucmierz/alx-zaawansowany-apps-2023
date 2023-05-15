// const findUser=()=>{
//   fetch('http://localhost:8000/users')
//   .then(response=>response.json())
//   .then(data=>{
//     console.log(data);
//     const user = data.find(user=>user.email===email && user.password===password)
//     console.log('user',user);
//   })
// }

// export const loginUser = (email, password) => {
  
    // let valid = false;
    // findUser();
    // if(email === 'abc@wp.pl' && password === '1234') {
    //   valid = true;
    // }
  
    // if(valid) {
    //   localStorage.setItem('autheticatedUser', email)
    // }
  
    // return valid;
  // }
  
  export const loginUser = (emailFromForm, passwordFromForm) => {
    return fetch('http://localhost:8000/users')
      .then(res => res.json())
      .then(users => {
        const user = users.find(user => {
          return user.email === emailFromForm
            && user.password === passwordFromForm
        })
        // uzywamy throw new Error jak chcemy zaprzestac wykonywanie Promisow
        if(!user) throw new Error("Couldn't find a user")
  
        localStorage.setItem('autheticatedUser', user.email)
      })
  }

  
  export const getUser = () => {
    const user = localStorage.getItem('autheticatedUser');
  
    if(!user) {
      window.location.href = '/login.html'
    }
  
    return user;
  }
  
  export const logoutUser=()=>{
    localStorage.removeItem('authenticatedUser');
    window.location.href = '/login.html';
  }
  
  // Do obecnego mechizmu logowania dopisz nastepujace rzeczy
  
  // 1. W momemcie wcisniecia przycisku zaloguj, zrob zapytanie do bazy danych i sprawdz czy istnieje taki uzytkownik o podanym emailu i hasle.
  
  // 2. Na kazdej z podstron, dodaj przycisk logout, ktory wyloguje uzytkownika z localStorage
  
  // 3*. Zrob formularz rejestracji, ktory doda uzytkownika a nastepnie go zaloguje