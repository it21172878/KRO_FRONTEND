import axios from 'axios'

const baseUrl = "http://localhost:5000"
// const baseUrl = "https://kro-backend-new.onrender.com"

const getAllPayment = (setPayment) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data --->', data);
        setPayment(data)
    })
}

const addPayment = (email, setEmail, card_holder_name, setCard_holder_name, card_number, setCard_number, 
    end_date, setEnd_date, cvv_number, setCvv_number, setPayment) =>{

        axios
        .post(`${baseUrl}/save`, {email, card_holder_name, card_number, end_date, cvv_number})
        .then((data) => {
            console.log(data);
            setEmail("")
            setCard_holder_name("")
            setCard_number("")
            setEnd_date("")
            setCvv_number("")
            getAllPayment(setPayment)
        })
        .catch((err) => console.log(err))

}


const updatePayment = (paymentId, email, setEmail, card_holder_name, setCard_holder_name, card_number, setCard_number, 
    end_date, setEnd_date, cvv_number, setCvv_number, setPayment, setIsupdating) =>{

        axios
        .post(`${baseUrl}/update`, {_id: paymentId, email, card_holder_name, card_number, end_date, cvv_number})
        .then((data) => {
            setEmail("")
            setCard_holder_name("")
            setCard_number("")
            setEnd_date("")
            setCvv_number("")
            setIsupdating(false)
            getAllPayment(setPayment)
        })
        .catch((err) => console.log(err))

}


const deletePayment = (_id, setPayment) =>{

        axios
        .post(`${baseUrl}/delete`, {_id})
        .then((data) => {
            console.log(data)
            getAllPayment(setPayment)
        })
        .catch((err) => console.log(err))

}

export {getAllPayment, addPayment, updatePayment, deletePayment}