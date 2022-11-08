# FRJ-6_List_and_Key
Apa itu list and key?
- <b>List and Key</b> merupakan Saat membuat daftar di React, dapat menggunakan prop "kunci" atau "key" untuk menentukan kunci unik untuk setiap item. Kunci ini digunakan untuk mengidentifikasi item mana yang akan diperbarui saat Anda ingin memperbarui item tertentu.

  Sumber : https://roadmap.sh/react dan https://medium.com/codeacademia/react-hooks-tutorial-usestate-useeffect-useref-usememo-dan-usecallback-8c8669948f8a
  
  Contoh Penggunaan List and Key : 
  
        //letak folder : components/UserCard.jsx
        import React from 'react'
        import axios from 'axios'  -> menambahkan sekaligus install package pnpm
        
        //merupakan component yang bernama UseCard 
        export default function UseCard(){
          
          //membuat sebuah state yang disimpan kedalam array 
          const [blog, setBlog] = useState([])
          
          //menambahkan side effect ke function komponen.
          useEffect(()=>{
          
            //mengambil api ke json server 
            axios.get("https://jsonplaceholder.typicode.com/posts")
              // menampilkan data ke console atau browser
              .then((res)=>{
                console.info(res.data)
                setBlog(res.data)
              })
              
              //menangkap error ketika data tersebut tidak keluar
              .catch((error)=>{
                //menangkap error
                console.error(error)
              })          
                       
          }, [])
          
          //menampilkan data sekaligus bagian JSX
          return(
            <div>
              {blog.map((e) => {
                return (
                  <div key={e.id}>
                      <h1>{e.title}</h1>
                      <p>{e.body}</p>
                  </div>
                )
              })}
            </div>
          )
        }
