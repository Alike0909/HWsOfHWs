import React, { useState } from 'react'

function Products() {

    const tableStyle = {
        width: "100%",
        border: "1px solid black",
    }

    const tdStyle = {
        border: "1px solid black",
    }

    const [products, setProducts] = useState([
        { name: 'Apple', amount: 20, price: 120, isChecked: true, },
        { name: 'Orange', amount: 12, price: 300, isChecked: true, },
        { name: 'Banana', amount: 6, price: 60, isChecked: true, },
    ])

    const deleteItem = (i) => {
        const filterItems = products.filter((item, index) => index != i)
        setProducts([...filterItems])
        calculate()
    }

    const [total, setTotal] = useState(0)

    const calculate = () => {
        let totalArray = []
        for (var i in products) {
            const temp = products[i].isChecked ? products[i].price * products[i].amount : 0
            totalArray.push(temp)
        }
        setTotal(totalArray.reduce((a, b) => a + b, 0))

        // let test = products.reduce((a, b) => (a.amount * a.price) + (b.amount * b.price), 0)
    }

    const letsCheck = (i) => {
        products[i].isChecked = !products[i].isChecked
        setProducts([...products])
        calculate()
    }

    const productItems = products.map((item, i) =>
        <tr key={i}>
            <td style={tdStyle}>{item.name}</td>
            <td style={tdStyle}>{item.amount}</td>
            <td style={tdStyle}>{item.price}</td>
            <td style={tdStyle}>{item.price * item.amount}</td>
            <td style={tdStyle}><button onClick={() => deleteItem(i)}>delete</button></td>
            <td><input onChange={() => letsCheck(i)} type="checkbox" checked={item.isChecked}></input></td>
        </tr>
    )
 
    return (
        <table style={tableStyle}>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Remove</th>
                    <th>Choose</th>
                </tr>
                {productItems}
                <tr>
                    <td></td>
                    <td></td>
                    <th>Total of total</th>
                    <th>{total}</th>
                    {/* <td><button onClick={calculate}>calculate</button></td> */}
                </tr>
            </tbody>
        </table>
    )
}

export default Products