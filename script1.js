class Produto {
  constructor() {
    this.id = 0
    this.ProductName = ''
    this.value = 0
  }

  adicionar() {
    window.alert('Método adicionar chamado')
  }

  excluir() {
    window.alert('Método excluir chamado')
  }
}

var produto = new Produto()
