const btnClick = document.querySelector(".btn-click")
const billValue = document.getElementById("bill") as HTMLInputElement
const pplValue = document.getElementById("ppl") as HTMLInputElement
const serviceValue = document.getElementById("service") as HTMLSelectElement
const sumBill = document.querySelector(".sumBill")
const sumTip = document.querySelector(".sumTip")
const sum = document.querySelector(".sum")
btnClick?.addEventListener('click', calcBill)
function calcBill(){
    const bill = billValue.valueAsNumber
    const ppl = pplValue.valueAsNumber
    const service = Number(serviceValue.value)
    const res = bill 
    const resTip = bill * (service/100)
    const resDiv = bill / ppl * (service/100 +1)
    if (sumBill !== null) {
        sumBill.textContent = `${res.toFixed(2)} € insg.`
    }
    if (sumTip !== null) {
        sumTip.textContent = `${resTip.toFixed(2)} € Trinkgeld `
    }
    if (sum !== null) {
        sum.textContent = `${resDiv.toFixed(2)} € pro Person `
    }
    
}






