export class Post {
    constructor(id, title, content, created_at, updated_at, categoryId, userId) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.categoryId = categoryId;
        this.userId = userId;
    }
}