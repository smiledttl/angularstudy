using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Mvc;
using myApp.Admin.Web.Common;
using myApp.Admin.Business.Models;
using myApp.Admin.Business.Services;
using myApp.Admin.Web.Models;

namespace myApp.Admin.Web.Controllers
{
    public class AlbumController : BaseSrvController
    {
        public ActionResult GetList(string title, int pagenum, int pagesize)
        {
            ListResult<AlbumModel> result = new ListResult<AlbumModel>();
            int totalCount;
            result.status = 0;
            result.success = true;
            result.data.datas = AlbumService.GetList(title, pagenum, pagesize, out totalCount);
            result.data.totalCount = totalCount;

            return ToJson(result);
        }
    }
}
