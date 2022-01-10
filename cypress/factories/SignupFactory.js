var faker = require('faker')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: '09752090435',
            email: faker.internet.email(firstName),
            whatsapp: '82987066578',
            address: {
                postalCode: '57071150',
                street: 'Rua Doutor Murilo Cardoso Santana',
                number: '200',
                details: 'ap 121',
                district: 'Clima Bom',
                city_state: 'Maceió/AL'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}