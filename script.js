let player1 = "Người chơi 1";
let player2 = "Người chơi 2";
let currentPlayer = 1;
let flippedCards = new Set();

// Danh sách thử thách
const challenges = [
    "💋 Hôn đối phương **bất cứ đâu** trong 20 giây, không được từ chối!",
    "🔥 Cởi **hai món đồ** ngay lập tức!",
    "👅 Dùng lưỡi **liếm một phần cơ thể đối phương**, họ chọn chỗ!",
    "🍷 Uống nước từ **cơ thể đối phương**, họ chọn chỗ!",
    "🤭 Nhắc lại **một lần bạn đã có suy nghĩ đen tối về đối phương**!",
    "🍑 Để đối phương **vỗ mông bạn 10 lần**, càng mạnh càng tốt!",
    "🛏️ Mô phỏng một tư thế **cực nóng bỏng** ngay bây giờ!",
    "🔥 Dùng răng kéo quần áo đối phương xuống **thêm một chút**!",
    "😈 Hôn từ **cổ xuống bụng** của đối phương trong 15 giây!",
    "🎭 Để đối phương **trói tay bạn** và làm gì tùy thích trong 2 phút!",
    "🙈 Nhắm mắt và để đối phương **làm bất cứ thứ gì** với bạn trong 20 giây!",
    "🖐️ Massage **nơi nhạy cảm nhất** của đối phương trong 45 giây!",
    "🚿 **Mô phỏng cảnh tắm** siêu sexy ngay tại chỗ!",
    "📸 Chụp một bức ảnh **gợi cảm nhất có thể** và gửi ngay cho đối phương!",
    "🍫 Dùng miệng lấy một viên kẹo trên **cơ thể đối phương**!",
    "👄 Hôn vào **vùng nhạy cảm** của đối phương, họ chọn chỗ!",
    "💨 Thổi hơi nóng vào **vùng nhạy cảm nhất** của đối phương!",
    "🎶 Thì thầm một câu **siêu khiêu khích** vào tai đối phương!",
    "🩳 **Cởi một món đồ của đối phương** bằng tay hoặc răng!",
    "⏳ Giữ một tư thế **sexy nhất** trong 45 giây mà không được cười!",
    "😏 Đọc một tin nhắn **nhạy cảm** gần đây nhất bằng giọng gợi cảm!",
    "🥵 Để đối phương chọn một thử thách **táo bạo nhất** cho bạn!",
    "💍 Mô phỏng màn cầu hôn nhưng **cực kỳ khiêu gợi**!",
    "🤫 Nói ra một **bí mật nhạy cảm nhất** về sở thích của bạn!",
    "🔥 **Tạo dáng gợi cảm nhất** mà bạn có thể làm ngay bây giờ!",
    "🍷 Uống nước từ **cơ thể đối phương**, không dùng tay!",
    "💪 Để đối phương dùng tay **khám phá cơ thể bạn** trong 20 giây!",
    "👀 Giữ ánh mắt gợi cảm với đối phương trong **30 giây**, ai cười trước thua!",
    "🛌 Mô phỏng một cảnh **nóng bỏng** trong phim ngay tại chỗ!",
    "🙊 Thì thầm vào tai đối phương một lời **thú nhận đen tối** nhất của bạn!",
    "🔥 Đặt tay đối phương lên **bất kỳ đâu trên người bạn** trong 15 giây!",
    "😈 Hôn **chậm rãi và đầy khao khát** lên môi đối phương trong 20 giây!",
    "🩲 Để đối phương **cởi một món đồ của bạn** bằng tay hoặc răng!",
    "🍑 **Ngồi lên đùi đối phương** và ôm chặt trong 15 giây!",
    "😏 Để đối phương chọn một tư thế **nóng bỏng** mà bạn phải thực hiện ngay!",
    "👅 Dùng lưỡi chạm vào bất kỳ nơi nào trên người đối phương!",
    "🎭 Đóng vai một nhân vật gợi cảm và quyến rũ đối phương ngay tại chỗ!",
    "🔥 **Thì thầm vào tai đối phương** điều **bạn muốn làm với họ ngay bây giờ**!",
    "🙈 **Nhắm mắt lại**, để đối phương **làm gì cũng được** trong 20 giây!",
    "💋 Hôn vào môi đối phương nhưng **không được dừng lại ngay**!",
    "🩳 Nếu bạn đang mặc quần dài, hãy **cởi bớt một chút**!",
    "👀 Giữ ánh mắt gợi cảm với đối phương trong **30 giây**, ai cười trước thua!",
    "🔥 Nếu bạn không thể thực hiện thử thách, hãy **cởi hai món đồ**!",
    "😏 Để đối phương **chạm vào một nơi nhạy cảm** trong 10 giây!",
    "💃 Thực hiện một **điệu nhảy sexy** trước mặt đối phương!",
    "🔥 Để đối phương **đặt tay lên một nơi nhạy cảm** trong 10 giây!",
    "🛏️ Giả vờ thì thầm một điều **cực kỳ gợi cảm** vào tai đối phương!",
    "🎥 Mô phỏng lại **một cảnh phim 18+ nổi tiếng** ngay tại chỗ!"
];

// Thêm âm thanh lật thẻ
const flipSound = new Audio("videoplayback.m4a");

function startGame() {
    let name1 = document.getElementById("player1").value.trim();
    let name2 = document.getElementById("player2").value.trim();

    if (name1 !== "") player1 = name1;
    if (name2 !== "") player2 = name2;

    // Ẩn bảng nhập tên và hiển thị game board
    document.getElementById("nameInputScreen").style.display = "none";
    document.getElementById("gameBoard").style.display = "grid";
    document.getElementById("turnIndicator").style.display = "block";

    document.getElementById("turnIndicator").innerText = `🔥 Player: ${player1}`;
}

function getRandomChallenges() {
    let shuffled = allChallenges.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 24);
}


function updateTurnIndicator() {
    let turnElement = document.getElementById("turnIndicator");
    let currentName = currentPlayer === 1 ? player1 : player2;

    // Thêm hiệu ứng
    turnElement.classList.add("turn-animation");
    turnElement.innerHTML = `🔥 <span class="player-name">${currentName}</span> đang chơi...`;

    // Xóa hiệu ứng sau 1 giây để có thể kích hoạt lại lần sau
    setTimeout(() => turnElement.classList.remove("turn-animation"), 1000);
}


function flipCard(card, index) {
    if (flippedCards.has(index)) return;
    flippedCards.add(index);

    flipSound.play(); // Phát âm thanh khi lật thẻ
    let challenge = challenges[index];

    // Hiển thị thử thách trong mặt sau của thẻ
    card.querySelector(".card-back").innerText = challenge;

    // Lật thẻ
    card.classList.add("flipped");

    let currentName = currentPlayer === 1 ? player1 : player2;
    setTimeout(() => {
        alert(`🔥 Player ${currentName}: ${challenge}`);
    }, 600);

    // Chuyển lượt người chơi
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    updateTurnIndicator();

    document.getElementById("turnIndicator").innerText = `🔥 Player: ${currentPlayer === 1 ? player1 : player2}`;
}
// Kiểm tra khi xoay màn hình
window.addEventListener("resize", adjustLayout);

function adjustLayout() {
    let isLandscape = window.matchMedia("(orientation: landscape)").matches;
    let board = document.getElementById("gameBoard");

    if (isLandscape) {
        board.style.gridTemplateColumns = "repeat(5, 1fr)";
    } else {
        board.style.gridTemplateColumns = "repeat(3, 1fr)";
    }
}



// Chạy lần đầu khi load trang
adjustLayout();
