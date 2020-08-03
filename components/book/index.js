Component({
    properties: {
        Book: Object
    },
    data: {},
    methods: {
        onTab:function (event){
            const bid = this.properties.Book.id
            wx.navigateTo({
                url: `/pages/book-detail/book-detail?bid=${bid}`
            })
        }
    }
});
