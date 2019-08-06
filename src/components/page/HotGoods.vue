<template>
  <div class="campus">
    <!-- <el-tabs v-model="activeName" @tab-click="handleClick"> -->
    <!-- <el-tab-pane label="全部" name="first">
          <div>
            <!-- <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"@selection-change="handleSelectionChange">
              <el-table-column type="selection"></el-table-column>
              <el-table-column prop="number" label="产品名称"></el-table-column>
              <el-table-column prop="room_num" label="价格"></el-table-column>
              <el-table-column prop="state" label="名额"></el-table-column>
              <el-table-column prop="room_num" label="已销售"></el-table-column>
              <el-table-column prop="state" label="销售状态"></el-table-column>
              <el-table-column prop="campus" label="适用门店"></el-table-column>
              <el-table-column prop="campus" label="序号"></el-table-column>
              <el-table-column prop="state" label="创建人" width="300"></el-table-column>
              <el-table-column label="操作" width="280" align="center">
                <template slot-scope="scope">
                  <el-button type="text" icon="el-icon-plus" @click="campusSetup">添加</el-button>
                  <el-button
                    type="text"
                    icon="el-icon-edit"
                    @click="handleEdit(scope.$index, scope.row)"
                  >编辑</el-button>
                  <el-button
                    type="text"
                    icon="el-icon-delete"
                    class="red"
                    @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div style="margin-top: 20px">
              <el-button @click="toggleSelection([tableData])">切换第二、第三行的选中状态</el-button>
              <el-button @click="toggleSelection()">取消选择</el-button>
            </div>
          </div>
    </el-tab-pane>-->

    <!-- <el-tab-pane label="销售中" name="second">
          <div>
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column prop="number" label="产品名称"></el-table-column>
              <el-table-column prop="room_num" label="产品价格"></el-table-column>
              <el-table-column prop="state" label="状态"></el-table-column>
              <el-table-column prop="campus" label="结束日期"></el-table-column>
              <el-table-column prop="number" label="数量"></el-table-column>
              <el-table-column prop="room_num" label="已销售"></el-table-column>
              <el-table-column prop="state" label="创建人" width="300"></el-table-column>
              <el-table-column prop="campus" label="适用门店"></el-table-column>
              <el-table-column label="操作" width="280" align="center">
                <template slot-scope="scope">
                  <el-button type="text" icon="el-icon-plus" @click="campusSetup">添加</el-button>
                  <el-button
                    type="text"
                    icon="el-icon-edit"
                    @click="handleEdit(scope.$index, scope.row)"
                  >编辑</el-button>
                  <el-button
                    type="text"
                    icon="el-icon-delete"
                    class="red"
                    @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="已售罄" name="third">
          <div>
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column prop="number" label="产品名称"></el-table-column>
              <el-table-column prop="room_num" label="产品价格"></el-table-column>
              <el-table-column prop="state" label="状态"></el-table-column>
              <el-table-column prop="campus" label="结束日期"></el-table-column>
              <el-table-column prop="number" label="数量"></el-table-column>
              <el-table-column prop="room_num" label="已销售"></el-table-column>
              <el-table-column prop="state" label="创建人" width="300"></el-table-column>
              <el-table-column prop="campus" label="适用门店"></el-table-column>
              <el-table-column label="操作" width="280" align="center">
                <template slot-scope="scope">
                  <el-button type="text" icon="el-icon-plus" @click="campusSetup">添加</el-button>
                  <el-button
                    type="text"
                    icon="el-icon-edit"
                    @click="handleEdit(scope.$index, scope.row)"
                  >编辑</el-button>
                  <el-button
                    type="text"
                    icon="el-icon-delete"
                    class="red"
                    @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="仓库中" name="fourth">
          <div>
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column prop="number" label="产品名称"></el-table-column>
              <el-table-column prop="room_num" label="产品价格"></el-table-column>
              <el-table-column prop="state" label="状态"></el-table-column>
              <el-table-column prop="campus" label="结束日期"></el-table-column>
              <el-table-column prop="number" label="数量"></el-table-column>
              <el-table-column prop="room_num" label="已销售"></el-table-column>
              <el-table-column prop="state" label="创建人" width="300"></el-table-column>
              <el-table-column prop="campus" label="适用门店"></el-table-column>
              <el-table-column label="操作" width="280" align="center">
                <template slot-scope="scope">
                  <el-button type="text" icon="el-icon-plus" @click="campusSetup">添加</el-button>
                  <el-button
                    type="text"
                    icon="el-icon-edit"
                    @click="handleEdit(scope.$index, scope.row)"
                  >编辑</el-button>
                  <el-button
                    type="text"
                    icon="el-icon-delete"
                    class="red"
                    @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
    </el-tab-pane>-->
    <!-- <el-tab-pane label="待确认" name="5">
          <div>
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column prop="number" label="产品名称"></el-table-column>
              <el-table-column prop="room_num" label="产品价格"></el-table-column>
              <el-table-column prop="state" label="状态"></el-table-column>
              <el-table-column prop="campus" label="结束日期"></el-table-column>
              <el-table-column prop="number" label="数量"></el-table-column>
              <el-table-column prop="room_num" label="已销售"></el-table-column>
              <el-table-column prop="state" label="创建人" width="300"></el-table-column>
              <el-table-column prop="campus" label="适用门店"></el-table-column>
              <el-table-column label="操作" width="280" align="center">
                <template slot-scope="scope">
                  <el-button type="text" icon="el-icon-plus" @click="campusSetup">添加</el-button>
                  <el-button
                    type="text"
                    icon="el-icon-edit"
                    @click="handleEdit(scope.$index, scope.row)"
                  >编辑</el-button>
                  <el-button
                    type="text"
                    icon="el-icon-delete"
                    class="red"
                    @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
    </el-tab-pane>-->
    <!-- </el-tabs> -->

    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>产品中心</el-breadcrumb-item>
      <el-breadcrumb-item>线下爆款</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content_box1">
      <div class="handle-box">
        <el-button type="primary" class="handle-del" @click="goodsSetup">新建爆款</el-button>
      </div>

      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="0">全部</el-menu-item>
        <el-menu-item index="1">未上架</el-menu-item>
        <el-menu-item index="2">已上架</el-menu-item>
        <!-- <el-menu-item index="4">仓库中</el-menu-item> -->
      </el-menu>

      <!-- <div v-if="activeIndex==1"> -->
      <el-table
        ref="multipleTable"
        :data="productList"
        tooltip-effect="light"
        style
        @selection-change="handleSelectionChange"
        fit
        highlight-current-row
      >
        <el-table-column type="selection" :disable="isdisable"></el-table-column>
        <el-table-column prop="title" label="产品名称" width="310"></el-table-column>
        <el-table-column prop="origPrice" label="价格" width="80"></el-table-column>
        <el-table-column prop="count" label="名额" width="80"></el-table-column>
        <el-table-column prop="surplusCount" label="已销售" width="80"></el-table-column>
        <el-table-column prop="ishelf" label="销售状态" width="100" :formatter="stateFormat"></el-table-column>
        <el-table-column prop="orgName" label="适用门店" width></el-table-column>
        <!-- <el-table-column prop="order" label="序号" width></el-table-column> -->
        <el-table-column prop="userName" label="创建人" width="100"></el-table-column>
        <el-table-column label="操作" fixed="right" align="center">
          <template slot-scope="scope">
            <!-- {{scope.row}}
            <div v-if="true">333 </div> -->
              <el-button
                type="text"
                icon="el-icon-edit"
                :disabled="scope.row.iedit=='true'?false:true"
                @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button>
              <el-button
                type="text"
                icon="el-icon-delete"
                :disabled="scope.row.iedit=='true'?false:true"
                @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="toggleSelection(productList)">全选</el-button>
        <!-- <el-button @click="toggleSelection()" :disabled="multipleSelection.length == 0">取消选择</el-button> -->
        <el-button @click="shelfUp">上架销售</el-button>
        <el-button @click="shelfDown">停止销售</el-button>
        <!-- <el-button @click="delStore()" :disabled="multipleSelection.length == 0">删除</el-button> -->
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "host_product",
  inject: ["reload"],
  data() {
    return {
      activeIndex: "0",
      activeName: "first",
      productList: [],
      multipleSelection: [],
      isdisable: false,
      goods_id: ""
    };
  },

  created() {
    this.getList();
  },
  watch: {
    $route() {
      this.reload();
      this.getList();
    }
  },
  methods: {
    stateFormat(row, column) {
      if (row.ishelf === 1) {
        return "未上架";
      } else if (row.ishelf === 2) {
        return "已上架";
      }
    },

    getList() {
      this.$axios({
        method: "get",
        url: "/store/hotProduct/getHotProductList/" + this.activeIndex,
        headers: { Authorization: sessionStorage.getItem("Authorization") }
      })
        .then(res => {
          // console.log(res)
          this.productList = res.data.result;
        })
        .catch(error => {
          console.log("error", error);
        });
    },

    handleEdit(index, row) {
      this.$router.push({
        path: "/goods_setup",
        query: {
          id: row.id
        }
      });
    },

    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(res => {
          this.$axios({
            method: "post",
            url: "/store/hotProduct/deleteHotProduct",
            data: {
              id: row.id,
              updateBy: sessionStorage.getItem("id")
            },
            headers: { Authorization: sessionStorage.getItem("Authorization") }
          })
            .then(res => {
              if (res.data.errorCode == 0) {
                // this.reload();
                this.getList();
                this.$message({
                  type: "success",
                  message: "删除成功!"
                });
              }
              // this.productList = res.data.result;
            })
            .catch(error => {
              console.log("error", error);
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    goodsSetup() {
      this.$router.push({ path: "/goods_setup" });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //全选,取消选择
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      if (val != "") {
        this.goods_id = val[0].id;
      }

      //val 为选中数据的集合
      this.multipleSelection = val;
    },
    shelfUp() {
      this.$axios({
        method: "post",
        url: "/store/hotProduct/updateProductShelfUp",
        data: {
          updateBy: sessionStorage.getItem("id"),
          id: this.goods_id
        },
        headers: { Authorization: sessionStorage.getItem("Authorization") }
      })
        .then(res => {
          console.log(res);
          this.getList();
        })
        .catch(error => {
          console.log("error", error);
        });
    },
    shelfDown() {
      this.$axios({
        method: "post",
        url: "/store/hotProduct/updateProductShelfDown",
        data: {
          updateBy: sessionStorage.getItem("id"),
          id: this.goods_id
        },
        headers: { Authorization: sessionStorage.getItem("Authorization") }
      })
        .then(res => {
          console.log(res);
          this.getList();
        })
        .catch(error => {
          console.log("error", error);
        });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.activeIndex = key;
      this.getList();
    }
  }
};
</script >

<style scoped>
.campus {
  padding: 20px 15px;
  box-sizing: border-box;
}
.el-table {
  width: 100%;
  overflow: scroll;
  // border: 2px solid red;
}
.el-table >>> .el-table__body-wrapper {
  overflow-x: scroll;
  //  border: 2px solid red;
}
.el-table >>> .el-table__body-wrapper .is-scrolling-none {
  overflow: scroll !important;
  //  border: 2px solid darkgoldenrod!important;
}
.el-table >>> .el-table__body {
  //  border-collapse:collapse!important;
}
</style>


