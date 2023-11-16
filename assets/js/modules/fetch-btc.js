export default async function fetchBtc() {
  try {
    const response = await fetch('https://blockchain.info/ticker');
    const data = await response.json();
    const btcPriceElement = document.querySelector('.btc-preco');
    btcPriceElement.innerText = (100 / data.BRL.sell).toFixed(4);
  } catch (error) {
    console.error('Erro ao buscar o preço do BTC:', error);
  }
}
