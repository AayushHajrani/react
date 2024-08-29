import { Client, Account, ID, Databases, Storage, Query } from "appwrite";
import conf from "../conf/conf";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteurl)
      .setProject(conf.appwriteprojectid);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createpost({ title, slug, content, image, status, userid }) {
    try {
      return await this.databases.createDocument(
        conf.appwritedatabaseid,
        conf.appwritecollectionid,
        ID.unique(),
        { title, content, image, status, userid }
      );
    } catch (error) {
      throw error;
    }
  }

  async updatepost(slug, { title, content, image, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwritedatabaseid,
        conf.appwritecollectionid,
        ID.unique(),
        { title, content, image, status }
      );
    } catch (error) {
      throw error;
    }
  }

  async deletepost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwritedatabaseid,
        conf.appwritecollectionid,
        ID.unique()
      );

      return true;
    } catch (error) {
      throw error;
    }
  }

  async getpost(slug) {
    try {
      return await this.databases.deleteDocument(
        conf.appwritedatabaseid,
        conf.appwritecollectionid,
        ID.unique()
      );
    } catch (error) {
      throw error;
    }
  }

  async getposts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwritedatabaseid,
        conf.appwritecollectionid,
        queries
      );
    } catch (error) {
      throw error;
    }
  }

  async uploadfile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwritebucketid,
        ID.unique(),
        file
      );
    } catch (error) {
      throw error;
    }
  }

  async deletefile(fileid) {
    try {
      return await this.bucket.deleteFile(conf.appwritebucketid, fileid);
    } catch (error) {
      throw error;
    }
  }

  getfilepreview(fileid) {
    return this.bucket.getFilePreview(conf.appwritebucketid, fileid);
  }
}

const service = new Service();
export default service;
