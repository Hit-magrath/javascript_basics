<html>
    <body>
        <h2> Hi, welcome to my first javascript poject</h2>
        <p id = 'thing'> click the button below</p>
        <button type="button" onclick = "document.getElementById('thing').innerHTML = 'Hello world!'"> click here</button>
        <p id= "hidden" style = "display:none">I can show hidden texts</p>
        <button type ="button" onclick = "document.getElementById('hidden').style.display = 'block' "> show hidden</button>
        <p id = "other"> i can hide</p>
        <button type = 'button' onclick = "document.getElementById('other').style.display='none'"> hide texts</button>
    </body>
</html>
