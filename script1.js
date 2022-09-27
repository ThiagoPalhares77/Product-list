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

    this.tableList()
    this.cancel()
  }

  tableList() {
    let tbody = document.getElementById('tbody')
    tbody.innerText = ''

    for (let i = 0; i < this.productsArray.length; i++) {
      let tr = tbody.insertRow()

      let td_id = tr.insertCell()
      let td_product = tr.insertCell()
      let td_value = tr.insertCell()
      let td_action = tr.insertCell()

      td_id.innerText = this.productsArray[i].id
      td_product.innerText = this.productsArray[i].productName
      td_value.innerText = this.productsArray[i].value

      td_id.classList.add('center')

      let imgEdit = document.createElement('img')
      imgEdit.src = 'assets/edit.svg'

      let imgDel = document.createElement('img')
      imgDel.src = 'assets/delete.svg'

      td_action.appendChild(imgEdit)
      td_action.appendChild(imgDel)
    }
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

  cancel() {
    document.getElementById('product').value = ''
    document.getElementById('value').value = ''
  }
}

var produto = new Produto()
