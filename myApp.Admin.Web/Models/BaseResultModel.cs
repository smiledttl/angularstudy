using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace myApp.Admin.Web.Models
{

    public class Status
    {
        public int code { get; set; }
        public string message { get; set; }
        
    }
    public class BaseResultModel
    {
        private string _msg = "成功";

        public int status { get; set; }

        public long newID { get; set; }

        public bool success { get; set; }

        //public BaseResultModel()
        //{
        //    status = new Status();
        //}

        public string msg
        {
            get
            {
                return _msg;
            }
            set
            {
                _msg = value;
            }
        }

        //public Status status { get; set; }
    }

    public class UploadFileResultModel : BaseResultModel
    {
        public string Url { get; set; }
    }

    public class BaseResultModel<T> : BaseResultModel
    {
        public T Model { get; set; }
        public T data { get; set; }
    }

    public class ListResult<T> : BaseResultModel
    { 
        public List<T> Items { get; set; }
        public ListData<T> data { get; set; }
        public ListResult()
        {
            data = new ListData<T>();
        }

    }

    public class ListData<T>
    {
        public int pageSize { get; set; } //页数
        public int totalCount { get; set; } //总数目
        public List<T> datas { get; set; }
    }
}