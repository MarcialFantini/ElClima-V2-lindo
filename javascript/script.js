//fechData();
fechData();
async function fechData() {
  const fechtDataa = await fetch(
    "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
  );
  const data = fechtDataa.json();

  data.then((data) => {
    console.log(data);

    const oficialCompra = document.getElementById("oficial-compra");
    const oficialVenta = document.getElementById("oficial-venta");
    const blueCompra = document.getElementById("blue-compra");
    const blueVenta = document.getElementById("blue-venta");

    oficialCompra.innerText = data[0].casa.compra;
    oficialVenta.innerText = data[0].casa.venta;
    blueCompra.innerText = data[1].casa.compra;
    blueVenta.innerText = data[1].casa.venta;
  });
}
