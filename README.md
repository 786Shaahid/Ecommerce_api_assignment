# Ecommerce-APIs

### Description

- CRUD operation on a Variants
- CRUD operations on an Products 
  

## API Reference

#### URL = http://localhost:7080

#### Create Product

```http
  POST /api/products/addProduct
```

| Body (application/json)        | Type     | Description   |
| :----------------------        | :------- | :------------ |
| `name`                         | `string` | **Required**. |
| `description`                  | `string` | **Required**. |
| `price`                        | `number` | **Required**. |


#### Create Variant

```http
  POST /api/products/addVariant/:productId
```

| Body (application/json) | params      | Type       | Description   |
| :---------------------- | :--------   | :--------- | :------------ |
| `-`                     | `productId` | `ObjectId` | **Required**. |
| `name`                  | `-`         | `string`   | **Required**. |
| `sku`                   | `-`         | `string`   | **Requiredc&& Unique**. |
| `additionalCost`        | `-`         | `number`    | **Default**. |
| `stockCount`            | `-`         | `number`    | **Default**. |

#### Update Product

```http
  POST /api/products/updateProduct/:productId
```

| Body (application/json) | params      | Type       | Description   |
| :---------------------- | :--------   | :--------- | :------------ |
| `-`                     | `productId` | `ObjectId` | **Required**. |
| `name`                  | `-`         | `string`   | **Required**. |
| `description`           | `-`         | `string`   | **Requiredc&& Unique**. |
| `price`                 | `-`         | `number`    | **Required**. |

#### Update Variant

```http
  POST /api/products/updateVariant/:productId
```

| Body (application/json) | params      | Type       | Description   |
| :---------------------- | :--------   | :--------- | :------------ |
| `-`                     | `productId` | `ObjectId` | **Required**. |
| `name`                  | `-`         | `string`   | **Required**. |
| `sku`                   | `query`     | `string`   | **Required**. |
| `additionalCost`        | `-`         | `number`    | **Default**. |
| `stockCount`            | `-`         | `number`    | **Default**. |

#### Delete an Product with thier by product Id 

```http
  DELETE /api/products/deleteProduct/:productId
```

| Parameter | Type       | Description   |
| :-------- | :--------- | :------------ |
| `productId` | `ObjectId` | **Required**. |

#### Delete an Variant by query params

```http
  DELETE /api/products/deleteVariant
```

| Parameter | Type       | Description   |
| :-------- | :--------- | :------------ |
| `sku`     | `query`    | **Required**. |

#### Get an Product with their variants by product Id

```http
  GET   /api/products/getProduct/:productId
```

| Parameter | Type       | Description   |
| :-------- | :--------- | :------------ |
| `productId` | `ObjectId` | **Required**. |

#### Searching products by product name, description, or variant name by passing query params

```http
  GET   /api/products/searchProduct
```

| Parameter | Type       | Description   |
| :-------- | :--------- | :------------ |
| `query`   | `string` | **Required**. |



## Environment Variables

To run this project locally, you will need to add the following environment variables to your .env file created in root directory of your project

- PORT
- DB_URL
- DB_URL_TEST

#### Note: Also, you will need to update   localhost:${port_number}

## Screenshots
### Mongo DB record for an Products

![App Screenshot](./screenshots/assetDbRecord.jpg)

### Mongo DB record for an asset soft delete

![App Screenshot](./screenshots/assetSoftDeleteDbRecord.jpg)

### Asset Folder Name as the uploaded folder in AWS S3 Bucket

![App Screenshot](./screenshots/assetBucketRecord.jpg)

## cURL - Refer Api Reference as well

### create a user


```bash
  curl --location 'https://asset-management-0au6.onrender.com/api/v1/user/create' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'name=****' \
--data-urlencode 'email=******' \
--data-urlencode 'password=*****'
```

### login a user

```bash
  curl --location 'https://asset-management-0au6.onrender.com/api/v1/auth/login' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'email=**********' \
--data-urlencode 'password=*******'
```

### create an asset

```bash
 curl --location 'https://asset-management-0au6.onrender.com/api/v1/asset/create/647a68e7be01b54e1ab9dd10' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N2E2OGU3YmUwMWI1NGUxYWI5ZGQxHCIsImlhdCI6MTY4NTkxNDc4N30.M1jrZBHBrA7uiqOFydbjZ7hHgMhSEZ0bfJA6Tv6i79Q' \
--form 'folder=@"/D:/Assinments - Company/Terra/Test.zip"' \
--form 'name="hisham"' \
--form 'tags="dasd"' \
--form 'category="asda"'
```
