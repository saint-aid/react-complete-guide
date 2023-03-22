import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData) // 부모에게 데이터 전달
    }

    return (
        <div className='new-expense' >
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}
export default NewExpense
