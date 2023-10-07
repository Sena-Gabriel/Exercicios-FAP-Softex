const PI = 3.14159

function areaEsf(raio) {
  return 4 * PI * raio**2
}
function volEsf(raio) {
  return (4/3) * PI * raio**3
}
raio = parseFloat(prompt(`informe o raio da esfera: `))

console.log(`Área: ${areaEsf(raio)} | Volume: ${volEsf(raio)}`)