import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice"
import income from "./income/incomeSlice"
import expense from "./expense/expenseSlice"
import transaction from "./transaction/transactionSlice"

const store = configureStore(
    {
        reducer : {auth , income , expense , transaction}
    }
)

export default store