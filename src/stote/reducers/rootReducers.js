const initState = {
    //luu state =  obj
    users: [
        { id: 1, name: 'Nicho' },
        { id: 2, name: 'Billis' }
    ]
}
//nếu muốn khi khởi tạo app lên thì nó đã có gtr initState rồi, thì gán nó cho state của reducers-redux

/*root reducers sex nhận vào 2 tham số
1.state: trạng thái của ứng dụng redux hay "nơi lưu trữ data của redux", note:ko phải state của react
2. Actions: Hiểu như từ phía react nó truyền actions lên ntn*/
//1.)reducers: công nhân
const rootReducer = (state = initState, actions) => {

    //khai chạy vào reducers thì sau khi xử lý xong nó sẽ return ra "state"
    return state;
}
export default rootReducer; 