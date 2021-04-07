import React, {useState} from 'react'
import User from '../user'
import Products from '../products'

function Header(props) {

    const {user} = props

    console.log(props.user.name)
    console.log(user.name)

    const [name, setName] = useState('Alnur')

    const handleName = () => {
        setName('Osman')
    }

    // const [products, setProducts] = useState(['Apple', 'Orange', 'Banana'])

    // const addProduct = () => {
    //     setProducts([...products, 'new product'])
    // }

    // let productItems = products.map((item, i) => <div key={i}>{item}</div>)

    const [text, setText] = useState('')

    const handleKeyUp = e => {
        setText(e.target.value.toUpperCase())
    }

    const [state, setState] = useState({ name: 'Иван', age: 25, show: true, })

    const showName = () => {
        alert(state.name + " " + state.age)
    }

    const editName = () => {
        setState({ name: 'Коля', age: 30})
    }

    let phrase = ""

    if (state.show == true) {
        phrase = "Привет, Иван"
    } else {
        phrase = "Пока, Иван"
    }

    const [listNames, setListNames] = useState(['Коля', 'Вася', 'Петя'])
    const listNamesItems = listNames.map((item, i) => <li key={i}>{i}. {item} <button onClick={()=>deleteItem(i)}>delete</button></li>)

    const addPunct = () => {
        setListNames([...listNames, 'пункт'])
    }

    const deleteItem = (i) => {
        const filterItems = listNames.filter((item, index) => index != i)
        setListNames([...filterItems])
    }

    const [age, setAge] = useState('')

    const agingClient = e => {
        let result = 2021 - Number(e.target.value)
        setAge(result)
    }

    const colors = ['black', 'green', 'yellow', 'blue']

    const colorItems = colors.map((item, i) => <option key={i}>{item}</option>)

    const [colored, setColored] = useState('black')

    const divStyle = {
        width: '20px',
        height: '20px',
        backgroundColor: colored,
    }

    const selectColor = () => {
        var whichOp = document.getElementById("col").selectedIndex;
        setColored(colors[whichOp])
    }

    const [check, setCheck] = useState(false)

    const checkTheBox = () => {
        if (check == true) {
            setCheck(false)
        } else setCheck(true)
    }

    const checkStyle = {
        display: check == true ? 'block' : 'none',
        // display: 'block'
    }

    const [checkInp, setCheckInp] = useState(true)

    const checkTheInput = () => {
        checkInp == false ? setCheckInp(true) : setCheckInp(false)
    }

    const lineArray = (i) => {
        array[i].isDone = !array[i].isDone
        setArray([...array])
    }

    const [array, setArray] = useState([{ name: 'John', isDone: false }, { name: 'Simon', isDone: false }, { name: 'James', isDone: false}])
    const arrayItems = array.map((item, i) => 
        <div key={i}>
            <input onChange={() => lineArray(i)} type="checkbox"></input>
            <span style={{textDecoration : item.isDone ? 'line-through' : 'none'}}>{item.name}</span>
        </div>
    )

    const randStyle = {
        display: 'flex',
        alignItems: 'center',
    }

    const [newUsers, setnewUsers] = useState([{ name: 'Paul', age: 30 }, { name: 'James', age: 21}, {name: 'Carlos', age: 70} ])
    const newUsersItems = newUsers.map((item, i) => 
        <div style={randStyle}>
            <span>{item.name} </span>
            <h4> {item.age}</h4>
        </div>
    )

    const sortAnything = (sortType) => {
        const temp = newUsers.sort((a, b) => a[sortType] > b[sortType] ? 1 : a[sortType] < b[sortType] ? -1 : 0)
        setnewUsers([...temp])
    }

    return (
        <>
        <div>Header</div>
            {/* <button onClick={addProduct}>Add Product</button> */}
            <input onKeyUp={handleKeyUp}></input>
            <p>{text}</p>
            {/* {productItems} */}
            <button onClick={showName}>Show Name</button>
            <button onClick={editName}>Edit Name</button>
            <p>{phrase}</p>
            <ul>
                {listNamesItems}
            </ul>
            <button onClick={addPunct}>Add Punct</button>
            <input onKeyUp={agingClient}></input>
            <p>{age}</p>
            <User></User>
            <select id="col" onChange={selectColor}>
                {colorItems}
            </select>
            <div style={divStyle}></div>
            <input type="checkbox" onChange={checkTheBox}></input>
            <p style={checkStyle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe inventore rerum ratione repudiandae quidem. Facere dolore sunt earum deserunt praesentium repellat corrupti dolor at. Recusandae qui ad aliquam dolor ratione.</p>
            <br></br>
            <input type="checkbox" onChange={checkTheInput}></input>
            <input type="text" disabled={checkInp}></input>
            {arrayItems}

            <button onClick={() => sortAnything('age')}>Sort by Age</button>
            <button onClick={() => sortAnything('name')}>Sort by Name</button>
            {newUsersItems}
            <br></br>
            <Products></Products>
        </>
    )
}

export default Header