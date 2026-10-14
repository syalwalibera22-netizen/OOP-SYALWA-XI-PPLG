class Rekening {
    //data private,tidak bisa diakses langsung dari luar class
    #saldo = 0;

 constructor(saldoAwal) {
    this.#saldo = saldoAwal;
 }
 // method untuk menambah saldo

 setor (jumlah)  {
    if (jumlah > 0) {
        this .#saldo += jumlah;
        console.log("jumlah setor harus > 0")
    }
 }
 // method untuk mengambil saldo
 tarik  (jumlah) {
    if(jumlah > 0 && jumlah <= this.#saldo) {
          this.#saldo=jumlah;
          console.log("penarikan saldo berhasil");

    }else{
        console.log("penarikan saldo gagal")
    }
 }
 lihatSaldo() {
    console.log ("Saldo anda Rp." + this.#saldo);
 }
 // buat objek baru
}
const rekeningfauzi = new Rekening(10000000);
// menggunakan method yang kita buat
rekeningfauzi.lihatsaldo();
rekeningfauzi.setor(50000);
rekeningfauzi.tarik(20000);
rekeningfauzi.lihatsaldo ();
