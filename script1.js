class Produto {
  constructor() {
    this.id = 1
    this.productsArray = []
  }

  save() {
    let product = this.readData()

    if (this.validation(product)) {
      this.add(product)
    }

    console.log(this.productsArray)
  }

  add(product) {
    this.productsArray.push(product)
    this.id++
  }

  readData() {
    let product = {}

    product.id = this.id
    product.productName = document.getElementById('product').value
    product.value = document.getElementById('value').value

    return product
  }

  validation(product) {
    let message = ''
    if (product.productName == '') {
      message += 'Por favor informe o nome do produto \n'
    }
    if (product.value == '') {
      message += 'Por favor informe o preço do produto \n'
    }
    if (message != '') {
      alert(message)
      return false
    }
    return true
  }

  cancel() {}
}

var produto = new Produto()
