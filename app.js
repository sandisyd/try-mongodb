const { MongoClient, ObjectId } = require('mongodb')

const uri = 'mongodb://127.0.0.1:27017'

const dbName = 'uda'

const client = new MongoClient(uri)

client.connect((error, client) => {
    if (error) {
        return console.log('Koneksi Gagal')
    }

    //pilih database
    const db = client.db(dbName)
    // Menambahkan 1 data ke dalam collection mahasiswa
    db.collection('mahasiswa').insertOne({
        nama: 'Joko',
        email: 'joko@mail.com'
    },

    (error, result)=>{
        if(error){
            return console.log('Gagal menambahkan data')
        }
        console.log(result)
    })

    //Menambahkan lebih dari 1 data
    // db.collection('mahasiswa').insertMany([
    //     {
    //         nama: 'Doddy',
    //         email: 'doddy@mail.com'
    //     },
    //     {
    //         nama: 'Joko',
    //         email: 'joko@mail.com'
    //     },
    // ],(error, result)=>{
    //     if(error){
    //         return console.log('Gagal menambahkan data')
    //     }
    //     console.log(result)
    // })

    //menampilkan semua data yang ada
    // console.log(db.collection('mahasiswa').find().toArray((error, result)=>{
    //     if(error){
    //         return console.log('Gagal menampilkan data')
    //     }
    //     console.log(result)
    // }))

    //Menampilkan data berdasarkan kriteria
    // console.log(db.collection('mahasiswa').find({nama: 'Sandi'}).toArray((error,result)=>{
    //     console.log(result)
    // })),

    //Menampilkan data berdasarkan id
    // console.log(db.collection('mahasiswa').find({
    //     _id:  ObjectId("636d1fa1fdba292b23283ece") }).toArray((error, result)=>{
    //     console.log(result)
    // }))


    //Mengubah data berdasarkan id
    // const updatePromise = db.collection('mahasiswa').updateOne(
    //     {
    //         _id: ObjectId('636e4a666fc394fc83c34931')
    //     },
    //     {
    //         $set: {
    //             nama: "Doddy Mulyono"
    //         }
    //     }
    // )

    // updatePromise.then((result)=>{
    //     console.log(result)
    // })

    //Mengubah data lebih dari 1 berdasarkan kriteria
    // db.collection('mahasiswa').updateMany({
    //     nama: 'Permen Nano'
    // }, {
    //     $set: {
    //         nama: "Perusahaan Permen"
    //     }
    // })

    //Menghapus 1 data
    // db.collection('mahasiswa').deleteOne(
    //     {
    //         _id: ObjectId('636e4a666fc394fc83c34931')
    //     }
    // ).then((result) => {
    //     console.log(result)
    // }).catch((e) => {
    //     console.log(e)
    // })

//Menghapus lebih dari 1 data
db.collection(
'mahasiswa'
).deleteMany({
    nama: 'Joko'
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})




})