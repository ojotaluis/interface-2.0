document.getElementById('formSimulador').addEventListener('submit', function (e) {
  e.preventDefault();

  const idade = parseInt(document.getElementById('idade').value);
  const plano = document.getElementById('plano').value;

  let precoBase = 0;
  switch (plano) {
    case 'essencial':
      precoBase = 29.90;
      break;
    case 'completo':
      precoBase = 59.90;
      break;
    case 'premium':
      precoBase = 99.90;
      break;
  }

  let adicional = 0;
  if (idade > 40) adicional = 0.20 * precoBase;
  if (idade > 60) adicional = 0.50 * precoBase;

  const precoFinal = precoBase + adicional;

  document.getElementById('resultado').textContent = `Valor estimado: R$ ${precoFinal.toFixed(2)} por mês`;
});