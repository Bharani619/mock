function navbar(){
    return `
    <nav id="navbar">
    <div class="logo" onclick="window.location.href='index.html'">masai</div>
    <div class="pages">
        <div><button onclick="window.location.href='data.html'">USER DATA</button></div>
        <div><button onclick="window.location.href='reports.html'">REPORTS</button></div>
    </div>
    <div class="loginBtn">
        <div><button onclick="window.location.href='login.html'">LOGIN</button></div>
    </div>
</nav>
    `
}
export default navbar;