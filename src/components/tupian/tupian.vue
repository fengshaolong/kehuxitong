<template>
  <div class="tupian">
      <ui id="main">
        <li>
          <p>浙江恒逸有限公司</p>
          <p>DTY总得分</p>
          <div id="myChart"  style="width: 362px;height:290px; margin: -76px"></div>
          <div class="gao"><span>高</span></div>
        </li>
        <li>
          <p>海宁市昕航布业有限公司</p>
          <p>DTY总得分</p>
          <div id="echar" style="width: 362px;height:290px; margin: -76px;"></div>
          <div class="zhong"><span>中</span></div>
        </li>
        <li>
          <p>海宁市昕航布业有限公司浙江恒逸有限公司</p>
          <p>DTY总得分</p>
          <div id="aow" style="width: 362px;height:290px; margin: -76px"></div>
          <div class="di"><span>低</span></div>
        </li>
        <li>
          <p>xxxxxxx</p>
          <p>DTY总得分</p>
          <div id="bow" style="width: 362px;height:290px; margin: -76px"></div>
          <div class="gao"><span>高</span></div>
        </li>
        <li>
          <p>xxxxxxx</p>
          <p>DTY总得分</p>
          <div id="cow" :style="{width: '362px',height:'290px', margin: '-76px'}"></div>
          <div class="zhong"><span>中</span></div>
          
        </li>
        <li>
          <p>xxxxxxx</p>
          <p>DTY总得分</p>
          <div id="dow" :style="{width: '362px',height:'290px', margin: '-76px'}"></div>
          <div class="di"><span>低</span></div>
        </li>
        <li>
          <p>浙江恒逸有限公司</p>
          <p>DTY总得分</p>
          <div id="eow" style="width: 362px;height:290px; margin: -76px"></div>
          <div class="gao"><span>高</span></div>
        </li>
        <li>
          <p>浙江恒逸有限公司</p>
          <p>DTY总得分</p>
          <div id="fow" style="width: 362px;height:290px; margin: -76px"></div>
          <div class="zhong"><span>中</span></div>
        </li>
        <li>
          <p>浙江恒逸有限公司</p>
          <p>DTY总得分</p>
          <div id="how" style="width: 362px;height:290px; margin: -76px"></div>
          <div class="di"><span>低</span></div>
        </li>
        <li>
          <p>浙江恒逸有限公司</p>
          <p>DTY总得分</p>
          <div id="iow" style="width: 362px;height:290px; margin: -76px"></div>
          <div class="gao"><span>高</span></div>
        </li>
        <li>
          <p>浙江恒逸有限公司</p>
          <p>DTY总得分</p>
          <div id="jow" style="width: 362px;height:290px; margin: -76px"></div>
          <div class="zhong"><span>中</span></div>
        </li>
        <li>
          <p>浙江恒逸有限公司</p>
          <p>DTY总得分</p>
          <div id="kow" style="width: 362px;height:290px; margin: -76px"></div>
          <div class="di"><span>低</span></div>
        </li>
      </ui>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    //点击事件的话,写这里面
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let MyChart = this.$echarts.init(document.getElementById("myChart"));
      let EcharLine = this.$echarts.init(document.getElementById("echar"));
      let AowLine = this.$echarts.init(document.getElementById("aow"));
      let BowLine = this.$echarts.init(document.getElementById("bow"));
      let CowLine = this.$echarts.init(document.getElementById("cow"));
      let DowLine = this.$echarts.init(document.getElementById("dow"));
      let EowLine = this.$echarts.init(document.getElementById("eow"));
      let FowLine = this.$echarts.init(document.getElementById("fow"));
      let HowLine = this.$echarts.init(document.getElementById("how"));
      let IowLine = this.$echarts.init(document.getElementById("iow"));
      let JowLine = this.$echarts.init(document.getElementById("jow"));
      let KowLine = this.$echarts.init(document.getElementById("kow"));

      // 绘制图表
      MyChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: []
        },
        series: [
          {
            name: "得分加成",
            type: "pie",
            radius: ["20%", "40%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "inside"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 250, name: "波动性" },
              { value: 250, name: "利润率" },
              { value: 250, name: "销售量" },
              { value: 250, name: "中断次数" }
            ],
            color: ["#3cb2ef", "#71f6f9", "#aefdca", "#ffae8b"]
          }
        ]
      });
      EcharLine.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: []
        },
        series: [
          {
            name: "得分加成",
            type: "pie",
            radius: ["20%", "40%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "inside"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 250, name: "波动性" },
              { value: 250, name: "利润率" },
              { value: 250, name: "销售量" },
              { value: 250, name: "中断次数" }
            ],
            color: ["#3cb2ef", "#71f6f9", "#aefdca", "#ffae8b"]
          }
        ]
      });
      AowLine.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: []
        },
        series: [
          {
            name: "得分加成",
            type: "pie",
            radius: ["20%", "40%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "inside"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 250, name: "波动性" },
              { value: 250, name: "利润率" },
              { value: 250, name: "销售量" },
              { value: 250, name: "中断次数" }
            ],
            color: ["#3cb2ef", "#71f6f9", "#aefdca", "#ffae8b"]
          }
        ]
      });
      BowLine.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: []
        },
        series: [
          {
            name: "得分加成",
            type: "pie",
            radius: ["20%", "40%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "inside"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 250, name: "波动性" },
              { value: 250, name: "利润率" },
              { value: 250, name: "销售量" },
              { value: 250, name: "中断次数" }
            ],
            color: ["#3cb2ef", "#71f6f9", "#aefdca", "#ffae8b"]
          }
        ]
      });
      CowLine.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: []
        },
        series: [
          {
            name: "得分加成",
            type: "pie",
            radius: ["20%", "40%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "inside"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 250, name: "波动性" },
              { value: 250, name: "利润率" },
              { value: 250, name: "销售量" },
              { value: 250, name: "中断次数" }
            ],
            color: ["#3cb2ef", "#71f6f9", "#aefdca", "#ffae8b"]
          }
        ]
      });
      DowLine.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: []
        },
        series: [
          {
            name: "得分加成",
            type: "pie",
            radius: ["20%", "40%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "inside"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 250, name: "波动性" },
              { value: 250, name: "利润率" },
              { value: 250, name: "销售量" },
              { value: 250, name: "中断次数" }
            ],
            color: ["#3cb2ef", "#71f6f9", "#aefdca", "#ffae8b"]
          }
        ]
      });
      EowLine.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: []
        },
        series: [
          {
            name: "得分加成",
            type: "pie",
            radius: ["20%", "40%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "inside"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 250, name: "波动性" },
              { value: 250, name: "利润率" },
              { value: 250, name: "销售量" },
              { value: 250, name: "中断次数" }
            ],
            color: ["#3cb2ef", "#71f6f9", "#aefdca", "#ffae8b"]
          }
        ]
      });
      FowLine.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: []
        },
        series: [
          {
            name: "得分加成",
            type: "pie",
            radius: ["20%", "40%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "inside"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 250, name: "波动性" },
              { value: 250, name: "利润率" },
              { value: 250, name: "销售量" },
              { value: 250, name: "中断次数" }
            ],
            color: ["#3cb2ef", "#71f6f9", "#aefdca", "#ffae8b"]
          }
        ]
      });
      HowLine.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: []
        },
        series: [
          {
            name: "得分加成",
            type: "pie",
            radius: ["20%", "40%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "inside"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 250, name: "波动性" },
              { value: 250, name: "利润率" },
              { value: 250, name: "销售量" },
              { value: 250, name: "中断次数" }
            ],
            color: ["#3cb2ef", "#71f6f9", "#aefdca", "#ffae8b"]
          }
        ]
      });
      IowLine.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: []
        },
        series: [
          {
            name: "得分加成",
            type: "pie",
            radius: ["20%", "40%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "inside"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 250, name: "波动性" },
              { value: 250, name: "利润率" },
              { value: 250, name: "销售量" },
              { value: 250, name: "中断次数" }
            ],
            color: ["#3cb2ef", "#71f6f9", "#aefdca", "#ffae8b"]
          }
        ]
      });
      JowLine.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: []
        },
        series: [
          {
            name: "得分加成",
            type: "pie",
            radius: ["20%", "40%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "inside"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 250, name: "波动性" },
              { value: 250, name: "利润率" },
              { value: 250, name: "销售量" },
              { value: 250, name: "中断次数" }
            ],
            color: ["#3cb2ef", "#71f6f9", "#aefdca", "#ffae8b"]
          }
        ]
      });
      KowLine.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: []
        },
        series: [
          {
            name: "得分加成",
            type: "pie",
            radius: ["20%", "40%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "inside"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 250, name: "波动性" },
              { value: 250, name: "利润率" },
              { value: 250, name: "销售量" },
              { value: 250, name: "中断次数" }
            ],
            color: ["#3cb2ef", "#71f6f9", "#aefdca", "#ffae8b"]
          }
        ]
      });
    }
  }
};
</script>

<style>

</style>

