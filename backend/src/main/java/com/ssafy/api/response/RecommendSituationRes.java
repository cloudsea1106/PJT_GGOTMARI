package com.ssafy.api.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.Article;
import com.ssafy.db.entity.Kind;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@ApiModel("RecommendSituationResponse")
public class RecommendSituationRes extends BaseResponseBody {

    @ApiModelProperty(name = "태그별 꽃 추천")
    List<RecommendTagRes> tags = new ArrayList<>();

    public static RecommendSituationRes of(Integer statusCode, String message, List<RecommendTagRes> tags) {
        RecommendSituationRes res = new RecommendSituationRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setTags(tags);
        return res;
    }

}
