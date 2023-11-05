---
layout: post
title: Unity Animation image 반복효과 코드로 구현하기
subtitle: 처음하는 것은 많은 삽질을 동반한다. 하지만 그것도 모두 다 과정이다.
categories: [Unity]
tags: [Unity, Animation, Image repeat]
---

## 구현 내용 설명
unity로 게임 만들기를 하면서 이미지를 단순하게 반복해서 보여주는 ui 동작이 필요했다.
unity는 코드를 사용하지 않고 애니메이션 동작을 만들고 해당 동작에 관련된 여려가지 기능을 제공했는데
아래의 gif 처럼 동작하면서 원하는 시간만큼 애니메이션을 보여주고 마지막 결과를 동기화를 맞춰서 하는 게 도저히 안되서 완전히 코드로 짜보았다.

<img src="https://hyundev.github.io/assets/images/rock_paper_anim.gif"/>

## 코드 설명 
이미지 순환의 반복 작업을 수행하기 위해 코루틴을 사용했다.
Image_1, Image_2, Image_3 은 각각 가위, 바위, 보 jpg 파일이다.

```cpp
void start() {
    // 이미지 animation 시작
    StartCoroutine(startComImageAnim(com));
}

// 특정 이미지로 변경
public void setComImage(int choice) {
    objComImage.GetComponent<Image>().sprite = Resources.Load<Sprite>("Image_" + choice) as Sprite;
}

IEnumerator startComImageAnim(int choice) {
    // 애니메이션 수행 시간
    float changeTime = 10f;
    // 애니메이션을 수행하면서 보여줄 이미지 index 번호
    int curOrder = 0;

    while(true) {
        if (changeTime <= 0f ) {
            break;
        }
        changeTime -= 1f;
        setComImage(curOrder % 3 + 1);
        curOrder++;
        // 0.2초 대기 후 애니메이션 종료
        yield return new WaitForSeconds(0.2f);
    }
    // 최종 이미지 세팅
    setComImage(choice);
}
```