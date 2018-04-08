$(document).ready(() => {
    listenToInputEvent()
})
// 

function deb(func, wait) {
    let timeout;
    // return function() {
    // 	// const later = function() {
    //     //         func();
    //     // }
    // 	// clearTimeout(timeout);
    //     // timeout = setTimeout(later, wait);
    //     clearTimeout(timeout);
    //     timeout = setTimeout(() => {
    //         func()
    //     }, wait);

    // };
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func()
        }, wait);
    }
};
const listenToInputEvent = () => {
    // Tạo ra 1 function search mới gọi tối 1s 1 lần 
    //const throttledSearch = _.debounce(search, 500)
    const throttledSearch = deb(search, 500);
    const inputElement = $("#article-search-form__input");
    inputElement.on("input", () => {

        clearData()
        throttledSearch()

    })
}

function clearData() {

    $("div.article-list").empty()
}

async function search() {
    const searchQuery = getUserSearchQuery();
    const data = await searchWiki(searchQuery);

    // Check từ khoá search có giống với từ khoá hiện tại của user không
    if (searchQuery != getUserSearchQuery()) {

        return // Không chạy bên dưới nữa
    }


    processData(data)
}

function getUserSearchQuery() {
    const inputElement = $("#article-search-form__input");
    const searchQuery = inputElement.val();
    return searchQuery
}

async function searchWiki(query) {
    if (query.length === 0) return
    $(".loader").hide();

    return await $.ajax({
            url: "https://en.wikipedia.org/w/api.php",
            data: { // cấu trúc data do server quy định 
                action: "query",
                list: "search",
                format: "json",
                srprop: "snippet",
                origin: "*",
                srsearch: encodeURI(query) // Thay dấu cách = "%20"
            }
            // success: processData

        },
        $(".article-search-form").append(` <div class="loader " style="margin-left:48%"></div> `),
    )

}

function processData(data) {

    // Hàm này được gọi sau khi dữ liệu được server trả về

    /**
     * Cách map hoạt động 
     * 
     * function map(mapFunction) {
     *   let result = []
     *
     *   for (let i = 0; i < data.query.search.length; i++) {
     *       const article = data.query.search[i]
     *       result.push(mapFunction(article))
     *   }
     *   
     *   return result
     * }
     */

    // Check xem query và search có tồn tại không
    if (!(data.query && data.query.search)) {
        return
    }

    // map: chuyển từ array article thành array các thẻ <a>
    // function truyền vào nhận 1 article và return 1 thẻ <a>
    if (data.query.search.length === 0) $(".article-list").html(`<h3 class="text-center">No result founded</h3>`)
    const elementString = data.query.search.map(article =>
        `<a href="https://en.wikipedia.org/?curid=${article.pageid}" target="_blank" class="article-view">
            <h3 class="article-view__title">${article.title}</h3>
            <p class="article-view__snippet">${article.snippet}</p> 
        </a>`,

    ).join("") // Ghép array string lại thành 1 string

    $(".article-list").append(elementString); // Đưa các thẻ <a> vừa tạo vào trong div.article-list
    $(".loader").hide();

}