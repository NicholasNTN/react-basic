const initState = {
    //luu state =  obj
    users: [
        { id: 1, name: 'Nicho' },
        { id: 2, name: 'Billis' }
    ],
    posts: [

    ]
}
//nếu muốn khi khởi tạo app lên thì nó đã có gtr initState rồi, thì gán nó cho state của reducers-redux

/*root reducers sex nhận vào 2 tham số
1.state: trạng thái của ứng dụng redux hay "nơi lưu trữ data của redux", note:ko phải state của react
2. Actions: Hiểu như từ phía react nó truyền actions lên ntn*/
//1.)reducers: công nhân
const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'DELETE_USER':
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            //filter locj lay id -> delete
            return {
                ...state, users
            };
        //(...state "copy state"), users "gans nguoc lai users"
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 1000);
            let user = { id: id, name: `random - ${id}` };
            return {
                ...state, users: [...state.users, user]
                //copy lai sau do ghi de lai users [copy lai trang thai hien tai va day them user vua create vao]
            };
        default:
            //khai chạy vào reducers thì sau khi xử lý xong nó sẽ return ra "state"
            return state;
    }
}
export default rootReducer; 