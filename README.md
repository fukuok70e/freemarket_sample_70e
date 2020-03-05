# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
|user_name|string|null: false, add_index: true|
# usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|e-mail|string|null: false, unique: true|
|password|string|null: false, unique: true|
|user_id|integer|null: false, foreign_key: true|
|username|string|null: false|
|furigana|string|null: false|
|birthdate|integer|null: false|
|destination_name|string|null: false|
|destination_name_furigana|string|null: false|
|postal_code|integer|null: false|
|prefecture|string|null: false|
|city|string|null: false|
|building_name|string|
|room_number|integer|
|phone_number	integer	unique: true|
|introduction	string	null: false|
|image	text|
### Association
- has_many :reviews
- has_many :images
- has_many :items
- has_many :comments
- has_many :likes
- has_many :points
- has_many :profits
- belongs_to :credit_card

# reviewsテーブル
|Column|Type|Options|
|------|----|-------|
|item_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|comment|text|null: false|
|evaluation|string|null: false|
### Association
- belongs_to :user

# pointsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|point|integer|
### Association	
- belongs_to :user

# profitsテーブル
|Column|Type|Options|
|------|----|-------|		
|user_id|integer|null: false, foreign_key: true|
|amount|integer|
### Association	
- belongs_to :user		

# credit_cardsテーブル		
|Column|Type|Options|
|------|----|-------|	
|user_id|integer|null: false, foreign_key: true|
|card_number|integer|null: false,unique: true|
|effective_month|integer|null: false,unique: true|
|effective_year|integer	null: false,unique: true|
|security_code|integer	null: false,unique: true|
### Association	
- belongs_to :user		

# commentsテーブル		
|Column|Type|Options|
|------|----|-------|	
|user_id|integer|null: false, foreign_key: true|
|item_id|integer|null: false, foreign_key: true|
|text|text|null: false|
### Association		
- belongs_to :user		
- belongs_to :item		

# imagesテーブル		
|Column|Type|Options|
|------|----|-------|	
|image	text	null: false
|item_id|integer	null: false, foreign_key: true|
|user_id|integer	null: false, foreign_key: true|
### Association		
- belongs_to :user		
- belongs_to :item		

# likesテーブル		
|Column|Type|Options|
|------|----|-------|	
|user_id|integer|null: false, foreign_key: true|
|item_id|integer|null: false, foreign_key: true|
### Association		
- belongs_to :user	
- belongs_to :item

# categorysテーブル		
|Column|Type|Options|
|------|----|-------|	
|ancestry|string|index true|
|name|string|null: false,add_index: true|
|item_id|integer|null: false, foreign_key: true|
### Association		
- has_many :items		

# itemsテーブル		
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false,foreign_key: true|
|name|string|null: false,add_index: true|
|description|text|null: false|
|category_id|string|null: false,add_index: true|
|brand|string|	
|status|string|null: false|
|postage|string|null: false|
|prefectures|string|null: false|
|delivery_days|integer|null: false|
|size|null: false|
|price|integer|null: false|
|buyer_id|integer|null: false, foreign_key: true|
### Association		
- has_many :comments		
- has_many :likes		
- has_many :images		
- belongs_to :category	
- belongs_to :user		
