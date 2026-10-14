const buku={
    judul:"Pemrograman OOP" ,
    penulis:"Fauzi",
    tahun_terbit:"2027",

    dibaca:function(){
        console.log("Buku ini dipelajari di mapel kejuruan" + this.judul);
    }
};




console.log(buku.judul);
buku.dibaca();

const mobil={
    merek:"kia picanto",
    warna:"biru muda",
    kecepatan:0,

    jalan:function(){
        this.kecepatan += 100;
        console.log("mobil berjalan di kecepatan" + this.kecepatan);
    }
}
mobil.jalan();