var cnt = 0;
function addtocart() {
    cnt = cnt + 1; 
    x = document.getElementById("mbtn").value;
    const node1 = document.createElement("tr");
    const th0 = document.createElement("th");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const textnode1 = document.createTextNode(cnt);
    const textnode2 = document.createTextNode("burger");
    const textnode3 = document.createTextNode(x);
    const textnode4 = document.createTextNode("30");
    th0.appendChild(textnode1);
    td1.appendChild(textnode2);
    td2.appendChild(textnode3);
    td3.appendChild(textnode4);

    node1.appendChild(th0);
    node1.appendChild(td1);
    node1.appendChild(td2);
    node1.appendChild(td3);
    
    document.getElementById("thed").appendChild(node1);

}
