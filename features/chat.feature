Feature: User chat

  Scenario: Chat with 2 users
    Given I am on the Landing page
    When I see both users have opened the page and connected to server
    And I see that both users enter the nickname
    And I see that both users connect to broker
    And I see that both users see themselves and each other in the Connected Users tab
    And I see that user1 sends any message
    And I see that user2 receives the sent message
    And I see that user2 sends any message
    Then I see that user1 receives the sent message
    And I see that both users can disconnect and lose connection

