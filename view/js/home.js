const usersDom = document.querySelector('#users')

const url ="http://localhost:4650";

const showusers = async () => {
   try {
      await  fetch (`${url}/api/users`,{
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(out => {
           console.log('users =', out);
           printUsers(out.users);
      }).catch(err => alert (err.msg)) 
   } catch (err) {
    alert(err.msg);
   }
};

// delete handler
const deleteHandler = async (id) =>  {
    if(window.confirm(`Are you sure to delete user id = ${id}?`)) {
        await fetch(`${url}/api/delete/${id}`,{
             method:'DELETE',
             headers: {
                'Content-Type': 'application/json'
             }
        })
            .then(res => res.json())
            .then(out => {
                window.alert(out.msg);
                window.location.reload();
            }).catch(err => console.log(err.msg));
    } else {
        return null;
    }
}



// print function
const printUsers = (users) => {
    const allUsers = users.map((item, index ) => {
        const { _id, name, email,age, username, password, address }  = item;

        return `<div class =" col-md-4 col-lg-4 col-sm-6">

            <div class="card mt-2">

                <div class="card-header">
                    <h6 class="card-title text-success text-uppercase">${name}</h6>
                </div>

                 <div class="card-body">

                    <ul class ="list-group">

                        <li class="list-group-item">
                            <strong>Email</strong>
                            <span class="float-end text-warning">${email}</span>
                        </li>

                        <li class="list-group-item">
                            <strong>Age</strong>
                            <span class="float-end text-warning">${age}</span>
                        </li>

                        <li class="list-group-item">
                            <strong>Username</strong>
                            <span class="float-end text-warning">${username}</span>
                        </li>

                        <li class="list-group-item">
                            <details>
                                <summary>Address</summary>
                                <p>
                                    ${address}
                                </p>
                            </details>                            
                        </li>

                    </ul>
                 </div>
                
                 <div class = "card-footer">
                   <a  href = "/update?id=${_id}" class="btn btn-sm btn-info">Edit</a>
                   <button onclick="deleteHandler('${_id}')" class = "btn btn-sm btn-danger float-end">Delete</button>
                 </div>

            </div>
        </div>`
    }).join('');

    usersDom.innerHTML = allUsers;
}



// anonymous function
(function() {
    showusers()
})()




// github
// https://classroom.github.com/classrooms/134412832-bhagyalaxmi999js-classroom-ee3132
